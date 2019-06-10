import {HeaderComponent} from '../src/components/header.component'
import {NavigationComponent} from '../src/components/navigation.component'
import {CreateComponent} from '../src/components/create.component'
import {PostComponent} from '../src/components/post.component'
import {FavoriteComponent} from '../src/components/favorite.component'
import {LoaderComponent} from './components/loader.component';

new HeaderComponent('header')

const navigation = new NavigationComponent('navigation')
const loader = new LoaderComponent('loader')

const posts = new PostComponent('posts', {loader})
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite', {loader})

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
])