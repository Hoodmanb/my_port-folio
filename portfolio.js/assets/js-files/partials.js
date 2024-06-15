const blogs = [{
  topic: 'How My Coding Journey Started',
  _date: '17 Mar 2024',
  name: 'My Port-Folio',
  body: 'specifically for generating Lorem Ipsum text like some other text editors. However, you can achieve functionality by using'
}];

const dropdown = `<!--nav bar and dropdown-->
<div class="navbar">
<div class="initial">
<img src="/assets/images/image-2.png.jpg" alt="image of nwigiri from 2024">
</div>
<!--burger icon and dropdown-->
<div class="dropdown" id="burger-container" onclick="toggleDropdown()">
<div id="burger">
<span>&nbsp;</span>
<span>&nbsp;</span>
<span>&nbsp;</span>
<span>&nbsp;</span>
</div>
<div class="dropdown-content">
<a href="/" onclick="closeDropdown()">-Home-</a>
<a href="/blog" onclick="closeDropdown()">-Blog-</a>
<a href="/resume" onclick="closeDropdown()">-Resume-</a>
</div>
</div>
</div>`;

const head = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/assets/css-files/index.css">
<link rel="stylesheet" href="/assets/css-files/common.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-ABC123..." crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />`;

const copyright = `<span class="copyright">
<i class='fas' style="float:center;">&#xf1f9;</i><h4> 2024 | NWIGIRI</h4>
</span>`;

module.exports = {
  blogs,
  dropdown,
  head,
  copyright
};