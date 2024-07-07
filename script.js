// const fs = require("fs");
// const axios = require("axios");
// const FormData = require("form-data");

// const payload = {
//   prompt: "Lighthouse on a cliff overlooking the ocean",
//   output_format: "webp"
// };

// const apiKey = 'sk-o7nBHjy5iPuHvVzuktTnJ0Jnu0O2utuWw1pSo5rw1lfKbUWF'; // Replace this with your actual API key

// (async () => {
//   try {
//     const form = new FormData();
//     for (const key in payload) {
//       if (payload.hasOwnProperty(key)) {
//         form.append(key, payload[key]);
//       }
//     }

//     const response = await axios.post(
//       `https://api.stability.ai/v2beta/stable-image/generate/ultra`,
//       form,
//       {
//         validateStatus: undefined,
//         responseType: "arraybuffer",
//         headers: { 
//           Authorization: `Bearer ${apiKey}`, 
//           Accept: "image/*",
//           ...form.getHeaders()
//         },
//       },
//     );

//     if(response.status === 200) {
//       fs.writeFileSync("./lighthouse.webp", Buffer.from(response.data));
//     } else {
//       throw new Error(`${response.status}: ${response.data.toString()}`);
//     }
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// })();
