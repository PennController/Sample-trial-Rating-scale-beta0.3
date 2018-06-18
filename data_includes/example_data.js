var shuffleSequence = seq("trial");
PennController.ResetPrefix(null);

var items = [
    ["trial", "PennController", PennController(
        newText("test sentence", "The mouse with which the cat that the dog chases plays moves fast.")
            .print()
        ,
        newText("question", "How easy do you find it to process the sentence above?")
            .print()
        ,
        // We create a 5-point scale
        newScale("answer", 5)
            .print()
            .wait() // This waits for a selection before validation
    )]
];