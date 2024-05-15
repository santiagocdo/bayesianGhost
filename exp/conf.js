//***********************************//
//   EXPERIMENT CONFIGURATION FILE   //
//***********************************//

// SET EXPERIMENT NAME
const experimentName = "Human Detection Task";
const experimentAlias = "ghost3";
const version = "super-training";

// SET SUBJECT IDENTIFICATION
const workerId = getParamFromURL('workerId');
if (workerId != "") {
  var subjectId = workerId;
  var feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_5z1aY15F6rS3jSe?workerId=" + subjectId;
}
const PROLIFIC_PID = getParamFromURL('PROLIFIC_PID');
if (PROLIFIC_PID != "") {
  var subjectId = PROLIFIC_PID;
  var feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_5z1aY15F6rS3jSe?PROLIFIC_PID=" + subjectId;
}
const participantId = getParamFromURL('participantId');
if (participantId != "") {
  var subjectId = participantId;
  var feedbackLink = "https://yalesurvey.ca1.qualtrics.com/jfe/form/SV_5z1aY15F6rS3jSe?participantId=" + subjectId;
}
// note: subjectId will be your unique indentifier that will be used in .js files

// // specific config parameters for perceivedAnimacy[chase-confidence]
// duration of feedback used in practice trials
const feedbackDuration = 1000;
const numberTrialsTest = 48; // 48 videos
const numberTrialsPractice = 48; // before it was as 2. (x 6, one for each action)