import { Server } from 'socket.io';

import Connection from './database/db.js';

import { getDocument, updateDocument } from './controller/document-controller.js'

const PORT = process.env.PORT || 9000;

const URL = process.env.MONGODB_URI || 'mongodb+srv://abinayabalasubramanian4:OmYkD8ysnBNAzVtW@google-docs-clone.v44tt.mongodb.net/?retryWrites=true&w=majority&appName=google-docs-clone';


Connection(URL);

const io = new Server(PORT, {
    cors: {
        origin: ['colab-docs-3unz-lju1lj1gh-abinayas-projects-4f659940.vercel.app'],
        methods: ['GET', 'POST'],
        credentials:true
    }
});

io.on('connection', socket => {
    socket.on('get-document', async documentId => {
        const document = await getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document', document.data);

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        })

        socket.on('save-document', async data => {
            await updateDocument(documentId, data);
        })
    })
});
