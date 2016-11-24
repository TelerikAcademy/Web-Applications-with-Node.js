'use strict';

module.exports = models => {
    const { Paste } = models;

    return {
        paged(page, pageSize) {
            return Paste.find({ deletedAt: null })
                        .skip(page * pageSize)
                        .limit(pageSize);
        },
        create(paste) {
            return new Paste(paste).save();
        },
        update(options) {
            const _id = options._id;
            delete options._id;
            console.log(options);
            return Paste.update({ _id }, options);
        },
        delete(_id) {
            return Paste.findByIdAndUpdate({ _id }, { deletedAt: new Date() });
        },
        createComment(paste_id, comment) {
            console.log(comment);
            return Paste.findByIdAndUpdate(paste_id, {
                $push: { comments: comment }
            });
        }
    }
}