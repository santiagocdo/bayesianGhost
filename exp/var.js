// trial counter
let trialIterator = 1;
let feedbackGenerator = '<div id="feedback" style="font-size:60px; color:white;">lol</div>';

// # # # # (1) create a random sample sized all videos within stim/ # # # # 
let randTrialsTestAll = jsPsych.randomization.repeat(stimArrayStim, 1); //shuffled array no repeats
const randTrialsTest = randTrialsTestAll.slice(0, numberTrialsTest);

let randTrialsPracticeAll = jsPsych.randomization.repeat(stimArrayStim, 1); //shuffled array no repeats
const randTrialsPractice = randTrialsPracticeAll.slice(0, numberTrialsPractice);

// actions:
// # of action (right/left)
// 1/6:  Agent A (COM) = Ask to squat down;          Agent A (IND) = Turn around; Agent B = Squat down
// 3/8:  Agent A (COM) = Ask to look at the ceiling; Agent A (IND) = Sneezes;     Agent B = Look at the ceiling
// 5/10: Agent A (COM) = Ask to sit down;            Agent A (IND) = Drinks;      Agent B = Sit down   

// # # # # (2) define trial videos location # # # # 
// trials
let ghostTest = [];
for (let i = 0; i < randTrialsTest.length; i++) {
    ghostTest.push("stim/" + randTrialsTest[i])
}
let ghostPractice = [];
for (let i = 0; i < randTrialsPractice.length; i++) {
    ghostPractice.push("stim/" + randTrialsPractice[i])
}


// # # # # (3) create trials object # # # #
let trialsTest = [];
// add ghost videos' location to trialsTest array
for (let i = 0; i < randTrialsTest.length; i++) {
    trialsTest.push({
        stimulus: [ghostTest[i]],
        data: {
            interview_date: today,
            subjectId: subjectId,
            stim: ghostTest[i],
            noise: ghostTest[i].split("_")[0].slice(-3),
            action: ghostTest[i].split("_")[1].slice(3,5),
            scramble: ghostTest[i].split("_")[2].slice(3,4),
            communicative: ghostTest[i].split("_")[3].slice(3,4),
            signal: ghostTest[i].split("_")[4].slice(3,5),
            trial_number: ghostTest[i].split("_")[5].slice(3,-4),
        }
        
    });
}
let trialsPractice = []
// add ghost videos' location to trialsPractice array
for (let i = 0; i < randTrialsPractice.length; i++) {
    trialsPractice.push({
        stimulus: [ghostPractice[i]],
        data: {
            interview_date: today,
            subjectId: subjectId,
            stim: ghostPractice[i],
            noise: ghostPractice[i].split("_")[0].slice(-3),
            action: ghostPractice[i].split("_")[1].slice(3,5),
            scramble: ghostPractice[i].split("_")[2].slice(3,4),
            communicative: ghostPractice[i].split("_")[3].slice(3,4),
            signal: ghostPractice[i].split("_")[4].slice(3,5),
            trial_number: ghostPractice[i].split("_")[5].slice(3,-4),
        }
    });
}