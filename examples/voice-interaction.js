// Example of hands-free voice chat interaction
const voiceInteraction = () => {
    const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new speechRecognition();

    recognition.onstart = () => {
        console.log('Voice recognition started. Speak into the microphone.');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log(`You said: ${transcript}`);
        // Here, you can implement actions based on the recognized speech
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ' + event.error);
    };

    recognition.onend = () => {
        console.log('Voice recognition service has stopped.');
    };

    // Start the voice recognition
    recognition.start();
};

// Initiate the voice interaction
voiceInteraction();