<></>;function render() {
<>{() => {let _$$p = (__sveltets_store_get(somePromise)) ;_$$p.then((value) => {<>
    <h1>Promise Resolved</h1>
</>})}}</>
return { props: {}, slots: {} }}

export default class {
    $$prop_def = __sveltets_partial(render().props)
    $$slot_def = render().slots
}