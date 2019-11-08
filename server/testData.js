const Post = require('./models/post.model');

const loadTestData = async () => {

    const data = [
        {
            id: '21sd42sdsaaf',
            title: 'How do I get funding for my startup?',
            content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
            author: 'James Dean'
        },
        {
            id: '543fg43gzsd4',
            title: '10 Brilliant Small Bussiness Ideas',
            content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
            author: 'Pablo Picasso'
        },
        {
            id: '1adfasf',
            title: 'Lorem Ipsum',
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.',
            author: 'Johen Cruyff'
        },
        {
            id: '2evxc34',
            title: 'Lorem Ipsum II',
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.',
            author: 'James Gandolfini'
        },
        {
            id: 's9skc9s',
            title: 'Lorem Ipsum III',
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Dome pro bono a volare que serra cantare alupe degrassa como biene pertuto la vita. Dolce gusto semperit veni vidi vici a rosa pulchra est. Sono dominci urbi et odbi vannusem compile a peringo santoro deminter composus. A vicere demelius condirmpo gutaer alma mater horno coturas domenica.',
            author: 'Flip & Flap'
        },
        {
            id: 'f3wgtvt',
            title: 'Lorem Ipsum IV',
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            author: 'Arthur Wojdat'
        },
        {
            id: '45gw34f',
            title: 'Lorem Ipsum V',
            content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
            author: 'Valikan Horation Prismus'
        }
    ];

    try {
        let counter = await Post.countDocuments();
        if(counter === 0) {
            console.log('No posts. Loading data...');
            await Post.create(data);
            console.log('Test data has been successfully loaded');
        }

    } catch (err) {
        console.log('Couldn\'t load test data', err);
    }
};

module.exports = loadTestData;