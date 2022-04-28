<?php

/*
 * This file is part of datlechin/flarum-offline-indicator.
 *
 * Copyright (c) 2022 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datlechin\OfflineIndicator;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/locale'),
];
