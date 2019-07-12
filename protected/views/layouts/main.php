<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="en">

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

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="wrap"> <!--id="page"-->
    <div class="container col-md-12" style="border: 1px solid gray">
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
    <div class="container col-md-12">
        <div class="row height_div text-center">
            <div class="col-md-12">
                top block
            </div>
        </div>
    </div>
    <div class="container col-md-4" style="border: 1px solid gray">
        <div class="row">
        </div>
        <div class="row" style="border: 1px solid gray">
            <div class="col-md-12 height_div">
                left
            </div>
        </div>
    </div>
    <div class="container col-md-4" style="border: 1px solid gray">
        <div class="row">
            <div class="col-md-12 height_div">
                center
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
    <div class="hidden-xs">
        <div class="container col-md-4 " style="border: 1px solid gray">
            <div class="row">
                <div class="col-md-12 height_div">
                    right 2
                </div>
            </div>
        </div>
    </div>


    <!--<div class="container">
            <div class="container">
                <div class="cold-md-12" id="mainmenu">
                    <?php /*$this->widget('zii.widgets.CMenu',array(
                        'items'=>array(
                            array('label'=>'Widget', 'url'=>array('/site/widget')),
//				array('label'=>'About', 'url'=>array('/site/page', 'view'=>'about')),
//				array('label'=>'Contact', 'url'=>array('/site/contact')),
                            array('label'=>'Login', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
                            array('label'=>'Logout ('.Yii::app()->user->name.')', 'url'=>array('/site/logout'), 'visible'=>!Yii::app()->user->isGuest)
                        ),
                    )); */?>

                </div><!-- mainmenu -->
            </div>
        <?php /*echo $content; */?>
<!--    </div>-->

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
</body>
</html>
