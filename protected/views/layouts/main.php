<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="en">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- blueprint CSS framework -->
<!--	<link rel="stylesheet" type="text/css" href="--><?php //echo Yii::app()->request->baseUrl; ?><!--/css/screen.css" media="screen, projection">-->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/own.css" media="screen, projection">
<!--	<link rel="stylesheet" type="text/css" href="--><?php //echo Yii::app()->request->baseUrl; ?><!--/css/print.css" media="print">-->
    <!-- Latest compiled and minified CSS -->
	<!--[if lt IE 8]>
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection">
    <![endif]-->

    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css">
    <link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" integrity="sha384-PmY9l28YgO4JwMKbTvgaS7XNZJ30MK9FAZjjzXtlqyZCqBY6X6bXIkM++IkyinN+" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="wrap"> <!--id="page"-->
    <div class="container col-md-12 col-xs-12 col-md-12 col-lg-12">
        <div class="row">
            <div class="col-md-12" style="border: 1px solid gray">
                <div class="row">
                    <div class="cold-md-12 text-right" id="mainmenu">
                        <?php $this->widget('zii.widgets.CMenu',array(
                            'items'=>array(
                                array('label'=>'Widget', 'url'=>array('/site/widget')),
//				array('label'=>'About', 'url'=>array('/site/page', 'view'=>'about')),
//				array('label'=>'Contact', 'url'=>array('/site/contact')),
                                array('label'=>'Login', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
                                array('label'=>'Logout ('.Yii::app()->user->name.')', 'url'=>array('/site/logout'), 'visible'=>!Yii::app()->user->isGuest)
                            ),
                        )); ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="row height_div text-center top-block-height">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <span class="blocks">TOP BLOCK</span>
            </div>
        </div>
        <div class="row equal">
            <div class="col-lg-2 col-md-2 col-sm-2 hidden-xs height_div" style="border: 1px solid gray">
                <span class="blocks">LEFT BLOCK</span>
            </div>
            <div class="p-0 w-100 col-lg-6 col-md-6 col-sm-8 col-xs-12" style="border: 1px solid gray;">
               <div class=" col-lg-12 col-xs-12 col-md-12 container-custom">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 top-block-height text-center no-line" style="border: 1px solid gray">
                        <span class="blocks" style="color: #000;">CENTER BLOCK</span>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background-color: #fff!important;">
                        <?= $content; ?>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 hidden-xs height_div" style="border: 1px solid gray">
                <span class="blocks">RIGHT BLOCK</span>
            </div>
        </div>
    </div>
</div>

	<?php /*if(isset($this->breadcrumbs)):*/?><!--
		<?php /*$this->widget('zii.widgets.CBreadcrumbs', array(
			'links'=>$this->breadcrumbs,
		)); */?><!-- breadcrumbs -->
	<?php /*endif*/?>

	<div class="clear"></div>

	<!--<div id="footer">
		Copyright &copy; <?php /*echo date('Y'); */?> by My Company.<br/>
		All Rights Reserved.<br/>
		<?php /*echo Yii::powered(); */?>
	</div>--><!-- footer -->

</div><!-- page -->
<?php if(Yii::app()->request->requestUri == '/index.php?r=site/widget'): ?>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script>
<?php endif; ?>

<!-- Latest compiled and minified JavaScript -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js" integrity="sha384-vhJnz1OVIdLktyixHY4Uk3OHEwdQqPppqYR8+5mjsauETgLOcEynD9oPHhhz18Nw" crossorigin="anonymous"></script>
<script type="text/javascript" src="<?= Yii::app()->request->baseUrl; ?>/js/common.js"></script>
</body>
</html>
