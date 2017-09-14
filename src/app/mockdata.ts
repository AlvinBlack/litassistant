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

export const MockArticles = (function(){
    var i  = 0;
    var arr = [];
    for(i; i < 10; i++){
        arr[i] = {};
        arr[i].id = i+1;
        arr[i].title = `title${i+1}`;
        arr[i].author = `author${i+1}`;
        arr[i].keywords = (function(){
            var j = 0;
            var keys = [];
            for(j; j < 5; j++){
                keys[j] = `article${i+1} keyword${j+1}`
            }
            return keys;
        })();
        arr[i].childIds =[2*i+1,2*i+2 ]
    }
    return arr;
})()

export const MockComments= (function(){
    var i = 0;
    var arr = [];
    for(i; i < 20; i++){
        arr[i] = {};
        arr[i].id = i+1
        arr[i].articleId = Math.ceil((i+1)/2);
        arr[i].visible = true;
        arr[i].content = (function(){
            var j = 0;
            var comments = [];
            for(j; j < 5; j++){
                comments[j] = `article${Math.ceil((i+1)/2)} comment${i+1}_${j+1}`
            }
            return comments;
        })()

    }
    return arr;
})()
        