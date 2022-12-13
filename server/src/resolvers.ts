// import queryTwitterResolvers from "./resolvers/Query"
import Db from "./db"
import { Resolvers } from "./resolvers-types.generated"
import Query from "./resolvers/Query"

// export default function createResolvers(): Resolvers{

//     return  {
//         const resolvers: Resolvers<TwitterResolverContext> = {
            
//         }
//     }
// }

export interface TwitterResolverContext {
    db: Db
}

const resolvers: Resolvers<TwitterResolverContext> = {
    Query
};
    
export default resolvers;