export const ProcessInfoTypeConfig = {
    RESEARCH: {
        iconType: 'BEAKER',
        headingText: 'Research & Strategy',
        subHeadingText:'Ask First:',
        descriptionText: 'Embracing a \'Ask First\'  approach ,this phase precedes development, ensuring clarity on project objectives and prerequisites. Rigorous planning involves scrutinizing project requirements, identifying essential learning curves, and devising a comprehensive roadmap for execution. The meticulous breakdown of tasks into atomic units ensures meticulousness, with emphasis on meticulous task sequencing and accurate task estimations. This thoughtful process sets the stage for a seamless journey towards project execution.'
    },
    DESIGN: {
        iconType: 'LIGHT_BULB',
        headingText: 'Brainstorming & Design',
        subHeadingText:'Problem Solving:',
        descriptionText: ' Engaging in systematic problem-solving, this stage involves dissecting each task into its atomic components, meticulously analyzing them, and devising optimal strategies to address challenges. Collaboration with team members fosters an environment for ideation, where diverse viewpoints converge to create innovative solutions. This phase culminates in the creation of preliminary designs for front-end aspects, laying a robust foundation for the development process.'
    },
    DEV: {
        iconType: 'CODE',
        headingText: 'Development',
        subHeadingText:'Bringing Ideas to life:',
        descriptionText:'This pivotal stage involves the execution of the meticulously outlined atomic tasks from earlier phases. It\'s the transformative phase where concepts and plans evolve into tangible products. Each task is carefully crafted and brought to life, culminating in the realization of the project\'s vision.'
    },
    QA: {
        iconType: 'CHECK_SHIELD',
        headingText: 'Quality Assurance',
        subHeadingText:'Testing: ',
        descriptionText:'Quality Assurance is a crucial phase involving comprehensive testing. It includes rigorous unit testing to ensure each component functions as intended. Additionally, integration testing ensures that all features work seamlessly together.'
    }
}

export enum ProcessInfoTypes {
    RESEARCH = 'RESEARCH',
    DESIGN = 'DESIGN',
    DEV = 'DEV',
    QA = 'QA'
}