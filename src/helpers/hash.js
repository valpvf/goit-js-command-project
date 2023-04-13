import md5 from 'md5';

export default ({ timeStamp, PRIVATE_KEY, PUBLIC_KEY }) => {
    return md5(`${timeStamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
}

