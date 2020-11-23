const KEY = '?client_id=ctnXjzjudesWKGeQKzNbsKwZH_VnFfUieHXXWegqT_k';

const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async page => {
    const res = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await res.json();

    if (res.status >= 400) {
        throw new Error(data.errors);
    }
    {
        return data;
    }
};

export { fetchImages };
