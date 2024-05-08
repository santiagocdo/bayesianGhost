// hello
let instructions0 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Hello and thank you for taking part in our experiment! </p>' +
    '<p style="font-size:24px;"> The experiment consist of a Human Detection Task followed by questionnaires, and it takes around 30 minutes to complete. </p>' +
    '<p style="font-size:22px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// please be in the task
let instructions1 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Please ensure the following: </p>' +
    '<p style="font-size:22px;"> (1) You are in a room with no distractions (no people, music, phones, etc.), </p>' +
    '<p style="font-size:22px;"> (2) For the next 30 minutes, you will be able to stay focused on the task and questionnaires, </p>' +
    '<p style="font-size:22px;"> As the study progresses, you may find that you start to feel tired. Please do your best to stay focused throughout, since our research depends on it! </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// first description of the stimuli/videos
let instructions2 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Human Detection Task </p>' +
    '<p style="font-size:22px;"> In this task, you will see a series of videos containing one person (A) or two people (A and B). </p>' +
    '<p style="font-size:22px;"> In half of the videos both Person A and Person B will be displayed one on each side of the screen, but Person B will be masked with moving dots. </p>' +
    '<p style="font-size:22px;"> For the other half of the videos there will be only Person A on one side, and on the other side there will be only moving dots. </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to continue. </i> </p>',
  choices: [32],
};

// after seeing videos with one person
let instructions3 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Human Detection Task </p>' +
    '<p style="font-size:22px;"> Your job will be to report if you see Person B within the moving dots part of the screen. </p>' +
    '<p style="font-size:22px;"> Please report as accurately as possible whether Person B is within the moving dots. </p>' +
    '<p style="font-size:22px;"> Press "J" for saying "Yes, I saw a Person B". </p>' +
    '<p style="font-size:22px;"> Press "F" to say "No, I did not see Person B". </p>' +
    '<p style="font-size:24px;"> <i> Press the letter J to continue. </i> </p>',
  choices: [74],
};

// after seeing videos with one person
let instructions4 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:26px;"> Human Detection Task </p>' +
    '<p style="font-size:22px;"> Before each video starts a "+" cross will signal where Person A will appear. </p>' +
    '<p style="font-size:22px;"> For the first half of the task, feedback will provided after your response ("J" or "F"). </p>' +
    '<p style="font-size:22px;"> Remember press "J" if you see Person B (within the moving dots) or press "F" if you do not see it. </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to start the first half of the task. </i> </p>',
  choices: [32],
};

// fixation for the trial
let fixation = {
  type: "html-keyboard-response",
  data: jsPsych.timelineVariable("data"), // if .data is going to be used then need to import it with jsPsych.timelineVariable("data")
  stimulus: '<div style="font-size:60px; color:white;">+</div>',
  on_start: (fixation) => {
    // to access curent trial data use jsPsych.currentTrial().data.
    var currentData = jsPsych.currentTrial().data;
    // if even number actions are left and odd number actions are right (see codes in var.js)
    if (parseInt(currentData.action)%2 == 0) {
      fixation.stimulus = '<div id="left-fixation" style="font-size: 60px; color: white; position: absolute; left: 40%; top: 50%; transform: translate(-50%, -50%);">+</div>';
    } else {
      fixation.stimulus = '<div id="right-fixation" style="font-size: 60px; color: white; position: absolute; left: 60%; top: 50%; transform: translate(-50%, -50%);">+</div>';
    }
  },
  choices: jsPsych.NO_KEYS,
  trial_duration: 1000,
};

// behaviour - detection
let detection = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:24px; color:white;">Did you see a Person B within the moving dots?</div>' + 
    '<p style="font-size:24px;"> <i> Press "F" for No or "J" for Yes. </i> </p>',
  data: jsPsych.timelineVariable("data"),
  choices: [70, 74],
  on_finish: function (data) {
    data.index = trialIterator;
    // data.subjectId = subjectId;
    // data.interview_date = today;
    let response = data.key_press;
    switch (response) {
      case 70: 
        data.response = "no";
      break;
      case 74:
        data.response = "yes";
      break;
    }
  }
};

let feedback = {
  type: "html-keyboard-response",
  stimulus: feedbackGenerator,
  choices: jsPsych.NO_KEYS,
  trial_duration: feedbackDuration,
  on_load: function (data) {
    let response = jsPsych.data.get().last(1).values()[0].key_press;
    let scramble = jsPsych.data.get().last(1).values()[0].scramble;
    switch (response) {
      case 70: 
        if (scramble == '0') {
          document.getElementById("feedback").innerHTML = "incorrect";
        } else if (scramble == '1') {
          document.getElementById("feedback").innerHTML = "correct";
        } 
        break;

      case 74:
        if (scramble == '1') {
          document.getElementById("feedback").innerHTML = "incorrect";
        } else if (scramble == '0') {
          document.getElementById("feedback").innerHTML = "correct";
        } 
        break;
    }
  },
};

// behaviour - confidence
let confidence = {
  type: "html-keyboard-response",
  stimulus: '<div style="font-size:24px; color:white;">How confident are you? (from 1 to 5)</div>'+ 
  '<p style="font-size:24px;"> <i> 1 = Not confident at all, 5 = Very confident. </i> </p>',
  data: jsPsych.timelineVariable("data"),
  choices: [49, 50, 51, 52, 53],
  on_finish: function (data) {
    data.index = trialIterator;
    // data.subjectId = subjectId;
    // data.interview_date = today;
    trialIterator ++;
    let response = data.key_press;
    switch (response) {
      case 49:
        data.confidence = "1";
      break;
      case 50: 
        data.confidence = "2";
      break;
      case 51: 
        data.confidence = "3";
      break;
      case 52: 
        data.confidence = "4";
      break;
      case 53: 
        data.confidence = "5";
      break;
    }
  }
};

// trial object
let trial = {
  type: "video-keyboard-response",
  sources: jsPsych.timelineVariable("stimulus"),
  data: jsPsych.timelineVariable("data"),
  response_allowed_while_playing: true, // Sant 15/08/2023
  trial_ends_after_video: true,
  response_ends_trial: false,
};

// videos with two people
let procedurePractice = {
  timeline: [fixation, trial, detection, feedback],
  timeline_variables: trialsPractice,
};

// behavioural instructions and keyboard presses
let instructions5 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:22px;"> In addition to report seeing ("J") or not ("F") Person B, now you will be asked to report how confident you were with your choice. </p>' + 
    '<p style="font-size:22px;"> Press 1, 2, 3, 4, or 5 on your keyboard to rate your confidence level, where 1 is not confident at all and 5 is very confident. </p>' +
    '<p style="font-size:24px;"> <i> Press the number 5 to continue. </i> </p>',
  choices: [53],
};

// ready to start?
let instructions6 = {
  type: "html-keyboard-response",
  stimulus: '<p style="font-size:22px;"> Are you ready? </p>' +
    '<p style="font-size:22px;"> This second part consists in 48 test videos, and no feedback will be provided anymore. </p>' + 
    '<p style="font-size:22px;"> Try to be as accurate as possible. If you are ready to start and coompleting the study and responding the questionnaires then: </p>' +
    '<p style="font-size:24px;"> <i> Press the spacebar to start. </i> </p>',
  choices: [32],
};

// test trial procedure
let procedureTest = {
  timeline: [fixation, trial, detection, confidence],
  timeline_variables: trialsTest,
  // choices: [70, 74],
};

// save data at the end of task
let dataSave = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Data saving...</p>" +
    '<div class="sk-cube-grid">' +
    '<div class="sk-cube sk-cube1"></div>' +
    '<div class="sk-cube sk-cube2"></div>' +
    '<div class="sk-cube sk-cube3"></div>' +
    '<div class="sk-cube sk-cube4"></div>' +
    '<div class="sk-cube sk-cube5"></div>' +
    '<div class="sk-cube sk-cube6"></div>' +
    '<div class="sk-cube sk-cube7"></div>' +
    '<div class="sk-cube sk-cube8"></div>' +
    '<div class="sk-cube sk-cube9"></div>' +
    '</div>' +
    "<p style='color:white;'>Do not close this window until the text dissapears.</p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function () {
    saveData(experimentAlias + "_" + subjectId, jsPsych.data.get().csv()); //function with file name and which type of file as the 2 arguments
    document.getElementById("unload").onbeforeunload = ''; //removes popup (are you sure you want to exit) since data is saved now
    // returns cursor functionality
    $(document).ready(function () {
      $("body").addClass("showCursor"); // returns cursor functionality
      // closeFullscreen(); // kill fullscreen
    });
  }
};

let end = {
  type: "html-keyboard-response",
  stimulus: "<p style='color:white;'>Thank you!</p>" +
    "<p style='color:white;'>You have successfully completed the Human Detection Task and your data has been saved.</p>" +
    "<p style='color:white;'>You will redirected to the Qualtrics questionnaires, if you are not redirected please click <a href="+ feedbackLink +">here</a>.</p>",
    // "<p style='color:white;'>To leave feedback on this task, please click the following link:</p>"+
    // "<p style='color:white;'><a href="+ feedbackLink +">Go to questionnaires!</a></p>",
    // "<p style='color:white;'>Please wait for the experimenter to continue.</p>"+
    //"<p style='color:white;'><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function() {
    window.location.replace(feedbackLink);
  }
};

$.getScript("exp/main.js");