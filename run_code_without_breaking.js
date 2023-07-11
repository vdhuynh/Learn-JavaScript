const runCode = () => {
    console.log("Step 1");
    try {
        getData();
    } catch {
        console.log("Step 2");
    }
}

// Sample usage - do not modify
runCode();
