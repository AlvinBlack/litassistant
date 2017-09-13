export class Article{
    id:number;
    title:string;
    link:string;
    author:string;
    keywords:string[];
    childIds:number[];
}
export class Comment{
    visiable:number = 1;
    id:number;
    articleId:number;
    content:string[];
}
export const MockArticles:Article[]=[
    {
        id:1,
        title:"title1",
        link:"link1",
        author:"author1",
        keywords:["keyword11","keyword12","keyword13","keyword14","keyword15"],
        childIds:[1,2]
    },
    {
        id:2,
        title:"title2",
        link:"link2",
        author:"author2",
        keywords:["keyword21","keyword22","keyword23","keyword24","keyword25"],
        childIds:[3,4]
    },
    {
        id:3,
        title:"title3",
        link:"link2",
        author:"author2",
        keywords:["keyword21","keyword22","keyword23","keyword24","keyword25"],
        childIds:[3,4]
    }
   
]

export const MockComments:Comment[] = [
    {
        id:1,
        articleId:1,
        visiable: 1,
        content:["comment1","comment2","comment3","comment4","comment5"]
    },
    {
        id:2,
        articleId:1,
        visiable: 1,
        content:["comment6","comment7","comment8","comment9","comment10"]
    },
    {
        id:3,
        articleId:2,
        visiable: 1,
        content:["comment11","comment12","comment13","comment14","comment15"]
    },
    {
        id:4,
        articleId:2,
        visiable: 1,
        content:["comment16","comment17","comment18","comment19","comment20"]
    }
]

