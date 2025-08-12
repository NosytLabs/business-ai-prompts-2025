document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('category-list');
    const promptTitleEl = document.getElementById('prompt-title');
    const promptUseCaseEl = document.getElementById('prompt-use-case');
    const promptFormEl = document.getElementById('prompt-form');
    const generatedPromptContainer = document.getElementById('generated-prompt-container');
    const generatedPromptEl = document.getElementById('generated-prompt');
    const copyButton = document.getElementById('copy-button');

    const promptFiles = [
        'EMAIL_COMMUNICATION.md',
        'MARKETING_CONTENT.md',
        'SALES_CUSTOMER_SERVICE.md',
        'ANALYSIS_PLANNING.md',
        'PRODUCTIVITY_OPERATIONS.md',
        'ADVANCED_BUSINESS.md',
        'AUTOMATION_WORKFLOWS.md',
        'BONUS_MATERIALS.md',
        'INDUSTRY_SPECIFIC.md',
        'HUMAN_RESOURCES.md',
        'STARTUP_FUNDRAISING.md',
        'LEGAL_COMPLIANCE.md',
        'CREATIVE_DESIGN.md',
        'PROJECT_MANAGEMENT.md',
        'MISCELLANEOUS.md'
    ];

    let promptsData = {};
    let activeCategory = null;
    let activePrompt = null;

    async function loadPrompts() {
        for (const file of promptFiles) {
            try {
                const response = await fetch(file);
                if (!response.ok) {
                    console.error(`Failed to fetch ${file}`);
                    continue;
                }
                const text = await response.text();
                const categoryName = file.replace('.md', '').replace(/_/g, ' ');
                promptsData[categoryName] = parseMarkdown(text);
            } catch (error) {
                console.error(`Error loading or parsing ${file}:`, error);
            }
        }
        renderCategories();
        if (Object.keys(promptsData).length > 0) {
            const firstCategory = Object.keys(promptsData)[0];
            setActiveCategory(firstCategory);
        }
    }

    function parseMarkdown(text) {
        const prompts = [];
        const sections = text.split('---');
        for (const section of sections) {
            if (!section.trim().startsWith('##')) continue;

            const titleMatch = section.match(/##\s*\d*\.?\s*(.*)/);
            const useCaseMatch = section.match(/\*\*Use Case\*\*:\s*(.*)/);
            const promptBlockMatch = section.match(/```([\s\S]*?)```/);

            if (titleMatch && useCaseMatch && promptBlockMatch) {
                const title = titleMatch[1].trim();
                const useCase = useCaseMatch[1].trim();
                const promptText = promptBlockMatch[1].trim();
                const placeholders = [...promptText.matchAll(/\[(.*?)\]/g)].map(m => m[1]);

                prompts.push({ title, useCase, promptText, placeholders });
            }
        }
        return prompts;
    }

    function renderCategories() {
        categoryList.innerHTML = '';
        for (const categoryName in promptsData) {
            const li = document.createElement('li');
            li.textContent = categoryName;
            li.dataset.category = categoryName;
            li.addEventListener('click', () => setActiveCategory(categoryName));
            categoryList.appendChild(li);
        }
    }

    function setActiveCategory(categoryName) {
        activeCategory = categoryName;

        // Update active class on category list
        const categoryItems = categoryList.querySelectorAll('li');
        categoryItems.forEach(item => {
            if (item.dataset.category === categoryName) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        renderPromptList(promptsData[categoryName]);
    }

    function renderPromptList(prompts) {
        promptTitleEl.textContent = 'Select a Prompt';
        promptUseCaseEl.textContent = `Browse the ${activeCategory} prompts below.`;
        promptFormEl.innerHTML = '';
        generatedPromptContainer.style.display = 'none';

        const promptList = document.createElement('ul');
        promptList.className = 'prompt-list';

        prompts.forEach(prompt => {
            const li = document.createElement('li');
            li.textContent = prompt.title;
            li.addEventListener('click', () => renderPromptForm(prompt));
            promptList.appendChild(li);
        });

        const contentDiv = document.getElementById('content');
        // Clear previous prompt list if any
        const existingPromptList = contentDiv.querySelector('.prompt-list');
        if(existingPromptList) {
            existingPromptList.remove();
        }

        // Insert prompt list after the use case element
        promptUseCaseEl.insertAdjacentElement('afterend', promptList);
    }

    function renderPromptForm(prompt) {
        activePrompt = prompt;
        promptTitleEl.textContent = prompt.title;
        promptUseCaseEl.textContent = prompt.useCase;
        promptFormEl.innerHTML = '';
        generatedPromptContainer.style.display = 'none';

        // Remove prompt list when a prompt is selected
        const existingPromptList = document.querySelector('.prompt-list');
        if(existingPromptList) {
            existingPromptList.remove();
        }

        const uniquePlaceholders = [...new Set(prompt.placeholders)];

        uniquePlaceholders.forEach(placeholder => {
            const formGroup = document.createElement('div');
            formGroup.className = 'form-group';

            const label = document.createElement('label');
            label.textContent = placeholder;
            label.htmlFor = `input-${placeholder.replace(/\s+/g, '-')}`;

            const input = placeholder.toLowerCase().includes('message') || placeholder.toLowerCase().includes('complaint') || placeholder.toLowerCase().includes('description')
                ? document.createElement('textarea')
                : document.createElement('input');

            input.type = 'text';
            input.id = `input-${placeholder.replace(/\s+/g, '-')}`;
            input.dataset.placeholder = placeholder;

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            promptFormEl.appendChild(formGroup);
        });

        const generateButton = document.createElement('button');
        generateButton.textContent = 'Generate Prompt';
        generateButton.addEventListener('click', generatePrompt);
        promptFormEl.appendChild(generateButton);
    }

    function generatePrompt() {
        let generatedText = activePrompt.promptText;
        const inputs = promptFormEl.querySelectorAll('[data-placeholder]');

        inputs.forEach(input => {
            const placeholder = input.dataset.placeholder;
            const value = input.value;
            const regex = new RegExp(`\\[${placeholder}\\]`, 'g');
            generatedText = generatedText.replace(regex, value);
        });

        generatedPromptEl.value = generatedText;
        generatedPromptContainer.style.display = 'block';
    }

    copyButton.addEventListener('click', () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(generatedPromptEl.value).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy to Clipboard';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers
                generatedPromptEl.select();
                document.execCommand('copy');
            });
        } else {
            // Fallback for older browsers
            generatedPromptEl.select();
            document.execCommand('copy');
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy to Clipboard';
            }, 2000);
        }
    });

    loadPrompts();
});
