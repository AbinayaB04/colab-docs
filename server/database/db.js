import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const Connection = async (URL) => {
//     const URL = 'mongodb+srv://abinayabalasubramanian4:OmYkD8ysnBNAzVtW@google-docs-clone.v44tt.mongodb.net/?retryWrites=true&w=majority&appName=google-docs-clone';
//     //const URL = `mongodb://abinayabalasubramanian4:OmYkD8ysnBNAzVtW@google-docs-clone-shard-00-00.mxyx3.mongodb.net:27017,google-docs-clone-shard-00-01.mxyx3.mongodb.net:27017,google-docs-clone-shard-00-02.mxyx3.mongodb.net:27017/?ssl=true&replicaSet=atlas-7mcg2d-shard-0&authSource=admin&retryWrites=true&w=majority&appName=google-docs-clone`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
