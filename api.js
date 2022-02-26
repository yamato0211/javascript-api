

const submitApi = () => {
    const text = document.getElementById('text')
    const slackUrl = 'https://hooks.slack.com/services/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'
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


