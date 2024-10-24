const axios = require('axios');

const MOODLE_URL = 'https://votre_moodle_url/webservice/rest/server.php';
const MOODLE_TOKEN = 'your_moodle_token';

const getCourses = async () => {
  try {
    const response = await axios.get(MOODLE_URL, {
      params: {
        wstoken: MOODLE_TOKEN,
        wsfunction: 'core_course_get_courses',
        moodlewsrestformat: 'json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

getCourses().then(courses => console.log(courses));
