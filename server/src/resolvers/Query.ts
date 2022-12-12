import { QueryResolvers } from "../resolvers-types.generated"

const queryTwitterResolvers: QueryResolvers = {
    currentUser: () => {
      return {
        id: "123",
        name: "John Doe",
        handle: "johndoe",
        coverUrl: "",
        avatarUrl: "",
        createdAt: "",
        updatedAt: "",
      }
    },
    suggestions: () => {
      return []
    },
  }
  export default queryTwitterResolvers