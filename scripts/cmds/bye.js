 const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");
module.exports = {
	config: {
		name: "bye",
		aliases: ["l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('▣𝗦𝗔𝗡𝗖𝗛𝗢𝗞𝗨𝗜𝗡:\》Je suis tellement cool que je ne peux pas rester avec des nuls😎\\➤je vous encule🖕', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
