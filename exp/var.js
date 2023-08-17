trialIterator = 1;

// # # # # (1) create a random sample sized all videos within stim/ # # # # 
let randTrialsAll = jsPsych.randomization.repeat(stimArray, 1); //shuffled array no repeats
const randTrials = randTrialsAll.slice(0, numberTrials);

// # # # # (2) define trial videos location # # # # 
// trials
let ghostTest = [];
for (let i = 0; i < randTrials.length; i++) {
    ghostTest.push("stim/" + randTrials[i])
}

// # # # # (3) create trials object # # # # 
let testTrials = [];
// add ghost videos' location to testTrials array
for (let i = 0; i < randTrials.length; i++) {
    testTrials.push({
        stimulus: [ghostTest[i]],
        data: {
            stim: ghostTest[i]
        }
    });
}