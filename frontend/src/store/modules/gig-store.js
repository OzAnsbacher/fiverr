import { gigService } from '../../services/gig-service'

export default {
    state: {
        gigs: null,
        categories: [
            {
                name: 'Logo Design',
                type: 'logos',
                txt: 'Build your brand',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
            },
            {
                name: 'WordPress',
                type: 'logos',
                txt: 'Customize your site',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
            },
            {
                name: 'Voice Over',
                type: 'logos',
                txt: 'Share your message',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
            },
            {
                name: 'Video Explainer',
                type: 'logos',
                txt: 'Engage your audience',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
            },
            {
                name: 'Social Media',
                type: 'logos',
                txt: 'Reach more customers',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
            },
            {
                name: 'SEO',
                type: 'logos',
                txt: 'Unlock growth online',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
            },
            {
                name: 'Illustration',
                type: 'logos',
                txt: 'Color your dreams',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png',
            },
            {
                name: 'Translation',
                type: 'logos',
                txt: 'Go global',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png',
            },
            {
                name: 'Data Entry',
                type: 'logos',
                txt: 'Learn your business',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png',
            },
            {
                name: 'Book Covers',
                type: 'logos',
                txt: 'Showcase your story',
                img: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_2.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png',
            },
        ],
    },
    getters: {
        gigsToShow({ gigs }) {
            return gigs
        },
        categoriesToShow({ categories }) {
            return categories
        },
    },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
    },
    actions: {
        loadGigs({ commit, state }) {
            gigService.query('gigs').then(gigs => {
                commit({ type: 'setGigs', gigs })
            })
        },
        //     loadCategories({commit}){
        // this.categories = await gigService.getCategories()
        // console.log(this.categories);
        //     },
    },
}
