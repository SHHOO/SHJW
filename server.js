const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});

app.get('/pet', function(요청, 응답){
    응답.send('반갑습니다.');
});
app.get('/beauti', function(요청, 응답){
    응답.send('뷰티페이지입니다.');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
//파라미터 이용
// app.get('/user/:id',(req, res) => {
//     // const q = req.params // 파람스로 받는 방법
//     // console.log(q.id);

        // const q = req.query //쿼리로 받는 방법
        // console.log(q.q)
//     res.json('userid': q.id);
// });