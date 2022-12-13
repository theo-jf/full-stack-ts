// import queryTwitterResolvers from "./resolvers/Query"
// import Db from "./db"
import { Resolvers } from "./resolvers-types.generated"
import Query from "./resolvers/Query"

// export default function createResolvers(): Resolvers{

//     return  {
//         const resolvers: Resolvers<TwitterResolverContext> = {
            
//         }
//     }
// }

const resolvers: Resolvers = {
    Query
};
    
export default resolvers;
    
// export interface TwitterResolverContext {
//     db: Db
// }
    