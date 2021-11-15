const linksSocialMedia = {
  github: 'dannaelpaz',
  youtube: 'channel/UChXoqKGqA1cWBDRDvTDfyiw',
  facebook: 'dannaelpaz',
  instagram: 'dannaelpaz',
  twitter: 'dannaelpaz'
}

function chageSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.geAttribute('class')

    li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.textContent = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
