
let posts = [
    {
        id: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non quam non nisi pharetra pellentesque id sit amet est. Nam a velit a tellus molestie interdum. Phasellus viverra porttitor malesuada. Duis luctus orci tortor, id tempus est molestie et. Etiam varius lectus vitae interdum consectetur. "
    },
    {
        id: 2,
        content: "Phasellus luctus arcu at interdum molestie. Ut porttitor viverra nunc, sed accumsan dui dignissim ac. Mauris eu mauris fermentum lorem tempus dictum. Curabitur semper ipsum est, varius euismod velit blandit non. Nam odio eros, porta id ligula scelerisque, dignissim euismod nisi. In rutrum sit amet nulla in vehicula. Pellentesque consectetur tempus quam. Quisque in condimentum nisl. Sed volutpat neque at ligula commodo finibus."
    },
    {
        id: 3,
        content: "Donec tincidunt, arcu id iaculis mattis, lectus arcu varius ex, eget fringilla erat dui ut lectus. Donec at massa non mi laoreet auctor eu ac ante. Aliquam quis nisl sit amet enim vestibulum finibus quis id leo. Aenean ultricies tortor sed leo pretium, et tempor nisl rutrum.  "
    },
    {
        id: 4,
        content: "Cras tellus erat, facilisis et tempus vel, scelerisque vel diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc lacinia semper dui, sit amet ultricies augue euismod in. Mauris eget mi eros. Nam id rutrum augue. In placerat tristique odio, eu blandit diam faucibus eget."
    }
];

const listPosts = () => {
    posts.forEach( post => {
        console.log(`Post ID: ${post.id}
    Post Content: ${post.content}
    `)
    })
}

const addPost = (newPost) => {

    const NewPromise = new Promise((resolve, reject) => {
        const addedPost = posts.push(newPost)

        if (addedPost) {
            resolve()
        } else {
            reject("There is an adding error")
        }
    })

    return NewPromise;
}

async function showPosts() {
    
    try {
        const addingPost = await addPost({id: 5, content: "Duis at massa porta, mattis risus a, lobortis augue. Praesent ac consequat magna. Sed felis turpis, volutpat condimentum erat et, eleifend vehicula arcu. Cras commodo elit dignissim sem tristique imperdiet. Duis at ligula vitae turpis posuere faucibus. "})
        listPosts();
    } catch (e) {
        console.log(e)
    }
}

showPosts();