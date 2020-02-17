const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
    async me(parent, args, ctx, info) {
        const userId = await ctx.request.userId;
        return ctx.db.query.user({ where: { id: userId } }, info);
    },
    async getUser(parent, args, ctx, info) {
        const userName = args.name;
        const user = await ctx.db.query.user(
            {
                where: { name: userName },
            },
            info
        );
        return user;
    },
};

module.exports = Query;
