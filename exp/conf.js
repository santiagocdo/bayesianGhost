//***********************************//
//   EXPERIMENT CONFIGURATION FILE   //
//***********************************//

// SET EXPERIMENT NAME
const experimentName = "Human Detection Task";
const experimentAlias = "ghost2";
const version = "signal-dots";

// SET SUBJECT IDENTIFICATION
const workerId = getParamFromURL('workerId');
if (workerId != "") {
  var subjectId = workerId;
  var feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_3K4vrvK9XpebRVc?workerId=" + subjectId;
}
const PROLIFIC_PID = getParamFromURL('PROLIFIC_PID');
if (PROLIFIC_PID != "") {
  var subjectId = PROLIFIC_PID;
  var feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_3K4vrvK9XpebRVc?PROLIFIC_PID=" + subjectId;
}
const participantId = getParamFromURL('participantId');
if (participantId != "") {
  var subjectId = participantId;
  var feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_3K4vrvK9XpebRVc?participantId=" + subjectId;
}
// note: subjectId will be your unique indentifier that will be used in .js files

// // specific config parameters for perceivedAnimacy[chase-confidence]
// duration of feedback used in practice trials
const feedbackDuration = 1000;
const numberTrialsTest = 6; // 72
const numberTrialsPractice = 1; // x 6, one for each action