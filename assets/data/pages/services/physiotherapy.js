import {phone_string, PhysiotherapyBackground} from "../../global";

const PhysiotherapyData = {
    core: {
        parallaxImage: PhysiotherapyBackground,
        parallaxHeader: "physiotherapy",
        parallaxBody: "Physiotherapy is the holistic treatment of your physical discomfort",
    },
    howPhysioCanHelp: {
        header: "How Physiotherapy can help",
        para: [
            "Physiotherapy treats pain. But it is also an approach to preventing injury, achieving higher performance and maintaining a healthy physical lifestyle.",
            "You don’t need a doctor’s referral to get professional help with your pain.",
        ],
    },
    howToGetStarted: {
        header: "How to get started",
        para: [
            "We offer consultations on weekdays between 7.30AM-7.00PM and on weekends between 7.30AM-12.00PM.",
            "All our professionals offer face-to-face or Telehealth appointments from the comfort of your home. We also offer online Physiotherapist-led Pilates " +
            "classes using basic equipment you’ll find at home.",
            "We design a tailored plan that helps relieve your pain, improve function and allow you to achieve your goals.",
            "Physiotherapy is able to be claimed on private health insurance.",
            "We accept private health insurance, WorkCover claims, NDIS, TAC and Medicare.",
            "Book online below to get started or contact us on "+phone_string+" for more details.",
        ],
    },
    commonInjuries: {
        image: "/physio/clients/client_42.jpg",
        header: "Common injuries we treat",
        body: [
            "Sports Injuries",
            "Back and Neck Pain",
            "Musculoskeletal Conditions",
            "ACL",
            "Concussion",
            "Post Operative Rehabilitation",
            "Osteoarthritis",
            "Osteoporosis",
            "Shoulder Injuries",
            "Shin Splints",
            "Sports Injury Prevention",
            "Scoliosis",
            "Nerve Pain",
            "Taping and Injury Support",
            "Postural",
            "And More...",
        ],
    },
    timelineBlock: {
        header: "In your first appointment",
        body: [
            {
                header: "1. Comprehensive assessment",
                body: "Your physiotherapist will listen to your history and concern, examine your pain and understand your intention for seeking help.",
            },
            {
                header: "2. Diagnosis",
                body: "Matching your story to the presentation of your symptoms, we will help you understand the cause of your pain.",
            },
            {
                header: "3. Recovery time",
                body: "Informed by your diagnosis, we will discuss the time required to relieve pain and achieve your identified goal.",
            },
            {
                header: "4. Action Plan",
                body: "We design a tailored plan that helps relieve your pain, improve function and allow you to achieve your goals.",
            }
        ]
    }
}

export default PhysiotherapyData
