import { ID, storage } from "@/appwrite";

const uploadImage=async(file:File) =>{
    if(!file) return;

    const fileUploaded =await storage.createFile(
        "64f8977b0c625ddb9aca",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploadImage;