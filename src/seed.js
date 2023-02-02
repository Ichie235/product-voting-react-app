window.seed = (function(){
    function generateVoteCount(){
        return Math.floor((Math.random()*10)+10)
    }

    const products = [
    {
        id:1,
        title:'Yellow Pail',
        description:'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg', 
        productImageUrl: 'images/products/image-aqua.png',
    },
    {
        id:2,
        title:' Pail',
        description:'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg', 
        productImageUrl: 'images/products/image-aqua.png',
    },
    {
        id:3,
        title:'Green Pail',
        description:'On-demand sand castle construction expertise.',
        url: '#',
        votes: generateVoteCount(),
        submitterAvatarUrl: 'images/avatars/daniel.jpg', 
        productImageUrl: 'images/products/image-aqua.png',
    },
]
  return {products:products}
}())

export default window.seed;