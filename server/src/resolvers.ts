import queryTwitterResolvers from "./resolvers/Query"
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';
import mutationTwitterResolver from './resolvers/Mutation';
import Db, { DbTweet, DbUser } from "./db"
import { Resolvers } from "./resolvers-types.generated"

export interface TwitterResolverContext {
    db: Db
    dbTweetCache: Record<string, DbTweet>
    dbUserCache: Record<string, DbUser>
    dbTweetToFavoriteCountMap: Record<string, number>
}

// export function createResolvers(): Resolvers<TwitterResolverContext> {
//     const resolvers = {
//         Query: queryTwitterResolvers,
//         Tweet: tweetTwitterResolver,
//         User: userTwitterResolver,
//     };
//     return resolvers;
//   }


const resolvers: Resolvers<TwitterResolverContext> = {
    Query: queryTwitterResolvers,
    Tweet: tweetTwitterResolver,
    User: userTwitterResolver,
    Mutation: mutationTwitterResolver,
};
    
export default resolvers;