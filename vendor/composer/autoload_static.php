<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit3af4c15e9d4f157c4b117e0a29a3bdb1
{
    public static $classMap = array (
        'Yii' => __DIR__ . '/..' . '/yiisoft/yii/framework/yii.php',
        'YiiBase' => __DIR__ . '/..' . '/yiisoft/yii/framework/YiiBase.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit3af4c15e9d4f157c4b117e0a29a3bdb1::$classMap;

        }, null, ClassLoader::class);
    }
}