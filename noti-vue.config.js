import { applicationIcons } from '@formkit/icons'

const config = {
    position: 'top-right',
    limit: 1,
    enqueue: true,
    avoidDuplicates: true,
    notifications: {
        global: {
            duration: 3000
        },
        icons: {
            ...applicationIcons
        }
    }
};

export default config;