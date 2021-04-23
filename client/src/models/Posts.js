import Session from "./Session";
const posts = [
    {
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user: {
            name: "John Smith",
            handle: "@johnsmith",
            pic: "https://bulma.io/images/placeholders/96x96.png"
        }
    },
    {
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "We want Moshiach Now",
        time: Date(),
        user: {
            name: "Amber Heard",
            handle: "@Heard",
            pic: "https://bulma.io/images/placeholders/96x96.png"
        }
    },
    {
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Have a wonderful day",
        time: Date(),
        user: {
            name: "Anil Deepak ",
            handle: "@Talathoti",
            pic: "https://bulma.io/images/placeholders/96x96.png"
        }
    },
];

export function GetMyPosts() {
    return GetPostsForUser(Session.user.handle);
}

export function GetPostsForUser(id) {
    return posts.filter(x => x.user.handle == id);
}

export function GetMyFeed() {
    return posts;
}