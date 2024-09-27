export async function load({ fetch }) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    let users = await res.json();
    const images = [
        'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk=',
        'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek=',
        'https://media.istockphoto.com/id/466807030/photo/closeup-profile-of-business-woman-looking-forward.jpg?s=612x612&w=0&k=20&c=ob9EqIH1ZCZphVO78NdNoypd12S7UT_cwwBJotKwlxg=',
        'https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?s=612x612&w=0&k=20&c=kUVdvBnwnZRxausswIKRZuC25bZgTXwrmGSPikdcOro=',
        'https://media.istockphoto.com/id/1411155612/photo/side-profile-of-a-beautiful-young-black-woman-thinking-and-looking-powerful-standing-against.jpg?s=612x612&w=0&k=20&c=q64YMacmkFA78WDmlShv9Q44va-8k2iDaYFIkWNeyqg=',
        'https://media.istockphoto.com/id/931693612/photo/the-happy-business-afro-american-man-standing-and-smiling-against-blue-background-profile-view.jpg?s=612x612&w=0&k=20&c=zIyYNBPzP_jORk0k-PycWmAUTNNdcwPccbXOE5CSChU=',
        'https://media.istockphoto.com/id/1351285381/photo/happy-young-african-american-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=e6sawVkyC7t_NTsFb13RWnLq4b9CYon4TJODpS2WU4I=',
        'https://media.istockphoto.com/id/637933814/photo/portrait-of-businessman-smiling-in-business-office.jpg?s=612x612&w=0&k=20&c=Jd31YY_NSG9zp-wa-dGSNR1DcWwn7xxSt4K7wICoIfc=',
        'https://media.istockphoto.com/id/174810353/photo/attractive-young-african-woman.jpg?s=2048x2048&w=is&k=20&c=dFt9FW7w8Zxlg_a8QPgl-4ue5Umde274KYJvYI7r1qc=',
        'https://media.istockphoto.com/id/477555600/photo/beach-woman.jpg?s=2048x2048&w=is&k=20&c=yppoZOv99hnjVxUGAxFi9tU8w-emIJRFYSXAbQ05l2Y=',
    ]
    users = users.map((user: any, index: number) => {
        user.image = images[index];
        return user;
    });
    return { props: { users } };
}
