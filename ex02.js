const getData = function () {
    return fetch("https://randomuser.me/api/").then(e=>e.json()).then(obj=> ({'name':obj.results[0].name, 'location':obj.results[0].location}));
};

function promise_fetch() {
    getData().then(console.log);
}
async function async_await() {
    try{
        let res = await getData();
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}
const {Observable} = Rx;
function rxjs_fetch() {
    const obs$ = Observable.create(function (ob) {
        ob.next(getData());
        ob.complete();
    });
    obs$.subscribe(console.log);
}