import { PostCard } from "../components/postCard/index"
import {PostTweetCard} from "../components/postTweetCard/index"
export const Home = () =>{
    
    return(
         <div className="max-w-xl mx-auto border-x border-gray-800 min-h-screen">
            <PostTweetCard />
             <div className="border-t border-gray-800"></div>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}