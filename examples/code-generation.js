// example of generating code using local AI

const localAI = require('local-ai');

async function generateCode(prompt) {
    try {
        const response = await localAI.generate(prompt);
        console.log('Generated Code:', response);
    } catch (error) {
        console.error('Error generating code:', error);
    }
}

// Example usage
generateCode('Create a function that returns the sum of two numbers.');