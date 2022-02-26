

const submitApi = () => {
    const text = document.getElementById('text')
    const slackUrl = 'slack トークン'
    const payload = {
        text: text.value
    }
    fetch(slackUrl, {
        method: 'POST',
        body: JSON.stringify(payload)
    }).then(() => {
        console.log("送信が完了しました")
        text.value = ''
    })
}


