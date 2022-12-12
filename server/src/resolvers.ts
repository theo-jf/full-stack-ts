import queryTwitterResolvers from "./resolvers/Query"
import Db from "./db"
import { Resolvers } from "./resolvers-types.generated"

export default function createResolvers(): Resolvers{

    return  {
        const resolvers: Resolvers<TwitterResolverContext> = {
            
        }
    }
}
    
    
export interface TwitterResolverContext {
    db: Db
}
    