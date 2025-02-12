const mongoose = require('mongoose');


const chapterSchema = new mongoose.Schema({
    chapterName: { type: String, required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Subject' },
    classId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Class' },
    boardId: { type: mongoose.Schema.Types.ObjectId, ref: "Board", required: true },
    content: {
        type: String,
        required: false,
    },
});


const Chapter = mongoose.models.Chapter || mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
