trialIterator = 1;

// # # # # (1) create a random sample sized all videos within stim/ # # # # 
let randTrialsAllTest = jsPsych.randomization.repeat(stimArrayTest, 1); //shuffled array no repeats
const randTrialsTest = randTrialsAllTest.slice(0, numberTrialsTest);

let randTrialsAllPractice = jsPsych.randomization.repeat(stimArrayPractice, 1); //shuffled array no repeats
const randTrialsPractice = randTrialsAllPractice.slice(0, numberTrialsPractice);

// # # # # (2) define trial videos location # # # # 
// trials
let ghostTest = [];
for (let i = 0; i < randTrialsTest.length; i++) {
    ghostTest.push("stim/test/" + randTrialsTest[i])
}
let ghostPractice = [];
for (let i = 0; i < randTrialsPractice.length; i++) {
    ghostPractice.push("stim/practice/" + randTrialsPractice[i])
}

// # # # # (3) create trials object # # # # 
let trialsTest = [];
// add ghost videos' location to trialsTest array
for (let i = 0; i < randTrialsTest.length; i++) {
    trialsTest.push({
        stimulus: [ghostTest[i]],
        data: {
            stim: ghostTest[i]
        }
    });
}
let trialsPractice = [];
// add ghost videos' location to trialsPractice array
for (let i = 0; i < randTrialsPractice.length; i++) {
    trialsPractice.push({
        stimulus: [ghostPractice[i]],
        data: {
            stim: ghostPractice[i]
        }
    });
}