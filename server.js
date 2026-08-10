const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const tools = [
    {
        id: 'portal-calculator',
        name: 'Nether Portal Calculator',
        icon: '🌀',
        description: 'Convert Overworld and Nether coordinates instantly.',
        link: '/portal-calculator'
    },
    {
        id: 'resource-calculator',
        name: 'Build Resource Calculator',
        icon: '📦',
        description: 'Calculate total stacks, double chests, and shulker boxes.',
        link: '/resource-calculator'
    },
    {
        id: 'redstone-logic',
        name: 'Redstone Signal Calculator',
        icon: '🔴',
        description: 'Calculate signal attenuation over distance and repeater counts.',
        link: '/redstone-logic'
    },
    {
        id: 'enchanting-guide',
        name: 'Enchantment Optimizer',
        icon: '📚',
        description: 'Find optimal gear enchantment order to avoid Too Expensive.',
        link: '/enchanting-guide'
    },
    {
        id: 'mob-grinder',
        name: 'Mob Farm Yield Estimator',
        icon: '💀',
        description: 'Estimate mob spawns and XP or item output per hour.',
        link: '/mob-grinder'
    },
    {
        id: 'villager-trades',
        name: 'Villager Discount Tracker',
        icon: '🌾',
        description: 'Calculate emerald discounts through zombie curing stages.',
        link: '/villager-trades'
    },
    {
        id: 'beacon-planner',
        name: 'Beacon Pyramid Planner',
        icon: '💎',
        description: 'Calculate precise block quantities for levels 1 to 4 pyramids.',
        link: '/beacon-planner'
    }
];

app.get('/', (req, res) => {
    res.render('index', { title: 'Minecraft Companion Hub', tools });
});

app.get('/portal-calculator', (req, res) => {
    res.render('portal-calculator', { title: 'Nether Portal Calculator' });
});

app.get('/resource-calculator', (req, res) => {
    res.render('resource-calculator', { title: 'Resource & Stack Calculator' });
});

app.get('/redstone-logic', (req, res) => {
    res.render('redstone-logic', { title: 'Redstone Signal Calculator' });
});

app.get('/enchanting-guide', (req, res) => {
    res.render('enchanting-guide', { title: 'Enchantment Optimizer' });
});

app.get('/mob-grinder', (req, res) => {
    res.render('mob-grinder', { title: 'Mob Farm Yield Estimator' });
});

app.get('/villager-trades', (req, res) => {
    res.render('villager-trades', { title: 'Villager Discount Tracker' });
});

app.get('/beacon-planner', (req, res) => {
    res.render('beacon-planner', { title: 'Beacon Pyramid Planner' });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});