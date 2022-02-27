

const submitApi = () => {
    const text = document.getElementById('text')
    const slackUrl = 'slack トークン'
    const payload = {
        text: text.value
    }
    if (text.value === '') {
        alert('テキストを入力してください')
    } else {
        fetch(slackUrl, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            console.log("送信が完了しました")
            text.value = ''
        })
    }

}


